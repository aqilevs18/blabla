interface User {
    firstName: string,
    lastName: string,
    about: string,
    birthDate: {
        year: number,
        month: number
    },
    status: Status,
}
enum Status {
    delete = "deleted",
    active = "active",
    inactive = "inactive"
}

export class firstTaskService {
    firstUser: User = {
        firstName: "saxeli1",
        lastName: "gvari1",
        about: "about1",
        birthDate: {
            year: 2002,
            month: 12
        },
        status: Status.active,
    }
    secondUser: User = {
        firstName: "saxeli2",
        lastName: "gvari2",
        about: "about2",
        birthDate: {
            year: 2003,
            month: 12
        },
        status: Status.inactive,
    }
    thirdUser: User = {
        firstName: "saxeli3",
        lastName: "gvari3",
        about: "about3",
        birthDate: {
            year: 2004,
            month: 12
        },
        status: Status.delete,
    }

    users: Array<User> = [this.firstUser,this.secondUser,this.thirdUser]
    click() {
        setTimeout(() => console.log('Second'), 2000);
    }
}