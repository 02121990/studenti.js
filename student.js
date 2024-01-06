class Student {
    constructor(name, adress, phone, course) {
        this.name = name;
        this.adress = adress;
        this.phone = phone;
        this.course = course;
    }

        getinfo() {
            return "Name: " + this.name +"\n" +
                   "Adress: " + this.adress +"\n" +
                   "Phone: " + this.phone +"\n" +
                   "Course: " + this.course 
    }
    }
