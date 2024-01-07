import { makeAutoObservable } from "mobx";

export default class InstructorStore {
    constructor() {
        this._instructors = [];
        this._selectedInstructor = {};
        this._page = 1;
        this._totalCount = 0;
        this._limit = 3;
        makeAutoObservable(this);
    }

    setInstructors(instructors) {
        this._instructors = instructors;
    }

    setSelectedInstructor(instructor) {
        this.setPage(1)
        this._selectedInstructor = instructor;
    }

    setPage(page) {
        this._page = page;
    }

    setTotalCount(count) {
        this._totalCount = count;
    }


    get instructors() {
        return this._instructors;
    }

    get selectedInstructor() {
        return this._selectedInstructor;
    }

    get totalCount() {
        return this._totalCount;
    }

    get page() {
        return this._page;
    }

    get limit() {
        return this._limit;
    }
}
