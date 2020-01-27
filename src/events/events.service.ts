import { Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
    private events = [];

    getAllEvents() {
        return this.events;
    }
}
