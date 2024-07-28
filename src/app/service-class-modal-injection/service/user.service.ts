import { userclassmodal } from "../modals/user";

export class userservice {
    users: userclassmodal[] = [
        new userclassmodal('Category', 'select category', [], true, 'get alerts', true),
        new userclassmodal('Category', 'select category', [], true, 'get alerts', true),
        new userclassmodal('Category', 'select category', [], true, 'get alerts', true),
        new userclassmodal('Category', 'select category', [], true, 'get alerts', true),
    ]

    getAllusers() {
        return this.users;
    }
}