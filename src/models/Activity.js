class Activity {

    /**
     * Create a new activity
     * 
     * @param {{user: User, event: Event, data: string, link: Model, linkModel: string}}
     * @return {Activity} created activity
     */
    static async createNew(data) {
        try {
            const Activity = this.model('Activity');

            const activity = new Activity();

            // assign user
            activity.user = data.user.id;

            // assign event
            activity.event = data.event.id;

            // // assign link
            // if (data.link) {
            //     activity.linkModel = data.linkModel;
            //     activity.link = data.link.id;
            // }

            // assign data
            activity.references = data.references;

            // assign date created
            activity.createdAt = new Date();

            // save activity
            await activity.save();

            // return created activity
            return activity;
        } catch (error) {
            throw error;
        }
    }

    //
}

module.exports = Activity;