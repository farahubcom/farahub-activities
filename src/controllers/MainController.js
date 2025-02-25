const { Controller } = require('@farahub/framework/foundation');
const { Auth, Workspace, Injection, Validator, Lang } = require("@farahub/framework/facades");
const ActivityListValidator = require('../validators/ActivityListValidator');


class MainController extends Controller {

    /**
     * The controller name
     * 
     * @var string
     */
    name = 'Main';

    /**
     * The controller routes
     * 
     * @var array
     */
    routes = [
        {
            type: 'api',
            method: 'get',
            path: '/activities',
            handler: 'list'
        }
    ];

    /**
     * Get list or user activities
     * 
     * @param {*} req request
     * @param {*} res response
     * 
     * @return void
     */
    list() {
        return [
            Auth.authenticate('jwt', { session: false }),
            Workspace.resolve(this.app),
            Injection.register('main.list'),
            Validator.validate(new ActivityListValidator()),
            async function (req, res, next) {
                try {

                    const { wsConnection: connection, inject } = req;

                    const User = this.app.connection.model('User');
                    const Activity = connection.model('Activity');

                    const args = req.query;

                    let search = {
                        //
                    }

                    if (args && args.link) {
                        search = {
                            ...search,
                            link: args.link
                        }
                    }

                    const sort = args && args.sort ? args.sort : "-createdAt";

                    const query = Activity.find(search)
                        .populate([
                            { path: 'user', model: User },
                            { path: 'event' },
                        ]);

                    query.sort(sort);

                    const total = await Activity.find(search).count();

                    if (args && args.page > -1) {
                        const perPage = args.perPage || 25;
                        query.skip(args.page * perPage)
                            .limit(perPage)
                    }

                    let data = await query.lean({ virtuals: true });

                    data = Lang.translate(data);

                    return res.json({ ok: true, data, total })
                } catch (error) {
                    next(error);
                }
            }
        ]
    }
}

module.exports = MainController;