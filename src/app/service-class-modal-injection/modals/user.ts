export class userclassmodal {

    constructor(name_, place_, data_, multi_, where_, select_) {
        this.name = name_;
        this.placeholder = place_;
        this.data = data_;
        this.multiselect = multi_;
        this.where = where_;
        this.select = select_;
    }

    placeholder: string;
    name: string;
    data: [];
    multiselect: boolean;
    where: {};
    select: string;
}