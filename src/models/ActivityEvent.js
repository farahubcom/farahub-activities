class ActivityEvent {

    /**
     * find by identifier or create event
     * 
     * @return 
     */
    static async findByIdentifierOrCreate(identifier, template) {
        try {
            const ActivityEvent = this.model('ActivityEvent');
            let event = await ActivityEvent.findOne({ identifier });

            if (!event) {
                event = new ActivityEvent({
                    identifier,
                    template
                    // template: {
                    //     'fa-IR': `{user} شخص {person} را ${event.person.wasNew ? 'ایجاد' : 'بروزرسانی'} کرد.`,
                    //     'en-US': `{user} ${event.person.wasNew ? 'created' : 'updated'} {person}`
                    // }
                });
                await event.save();
            }

            return event;
        } catch (error) {
            throw error;
        }
    }

    //
}

module.exports = ActivityEvent;