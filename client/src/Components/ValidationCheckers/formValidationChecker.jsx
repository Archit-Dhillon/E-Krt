
export default function formValidationChecker(event) {
    var { name, value } = event.target
    switch (name) {
        case "name":
        case "profession":
        case "username":
        case "subject":
        case "color":
        case "line1":
        case "line2":

            if (value.length === 0)
                return name + "field must required"
            else if (value.length < 3)
                return name + "field must contain atleast 3 character and must be less than 50 characters"
            else if (value.length > 50)
                return name + " must contains less then 50 Character"
            else
                return ""

        case "size":
            if (value.length === 0)
                return name + " must required"

            else if (value.length > 10)
                return name + " must contains less then 10 Character"
            else
                return ""
        case "baseprice":
            if (!value)
                return name + " must required"
            else if (value.length < 1)
                return " Baseprice must be greater then 0"

            else
                return ""
        case "discount":
            if (value < 0 || value > 100)
                return "Discount must be greater then or equal 0 && less then 100"

            else
                return ""
        case "star":
            if (!value)
                return name + " must required"
            else if (value.length < 1 && value > 5)
                return "Star must be greater then 1less then 5"

            else
                return ""

        case "message":
            if (value.length === 0)
                return name + "field must required"
            else if (value.length < 3)
                return name + "field must contain atleast 3 character and must be less than 50 characters"

            else
                return ""
        case "email":
            if (value.length === 0)
                return name + "field must required"
            else if (value.length < 13)
                return name + "field must contain atleast 3 character and must be less than 50 characters"
            else if (value.length > 50)
                return name + " must contains less then 50 Character"
            else
                return ""

        case "password":
            if (value.length === 0)
                return name + "field must required"
            else if (value.length < 8)
                return name + "field must contain atleast 3 character and must be less than 50 characters"
            else if (value.length > 30)
                return name + " must contains less then 50 Character"
            else
                return ""

        case "phone":
            if (value.length === 0)
                return name + "field must required"
            else if (value.length !== 10)
                return name + "field must contain atleast 3 character and must be less than 50 characters"
            else if (value[0] >= 0 && value[0] <= 5)
                return "Invalid Phone Number"
            else
                return ""


        default:
            return ""
    }
}
