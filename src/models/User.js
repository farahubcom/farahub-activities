class User {

    /**
     * Log an activity for the user
     * 
     * @param {ActivityEvent} event
     * @return {Activity} created activity
     */
    async logActivity(event, data) {
        try {
            const Activity = this.model('Activity');

            // create new activity
            const activity = await Activity.createNew({
                user: this.id,
                event,
                data
            });

            // return created activity
            return activity;
        } catch (error) {
            throw error;
        }
    }

    //
}

module.exports = User;