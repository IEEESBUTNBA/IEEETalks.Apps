"use strict";
var Event = (function () {
    function Event(id, entityId, name, summary, description, image, location, quota, price, eventDate) {
        this.id = id;
        this.entityId = entityId;
        this.name = name;
        this.summary = summary;
        this.description = description;
        this.image = image;
        this.location = location;
        this.quota = quota;
        this.price = price;
        this.eventDate = eventDate;
    }
    return Event;
}());
exports.Event = Event;
//# sourceMappingURL=event.js.map