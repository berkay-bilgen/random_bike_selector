const getBike = () => {

    let brandNumber = Math.floor(Math.random() * 10)

    switch (brandNumber) {
        case 0:
            return "Canyon Ultimate"
            break;
        case 1:
            return "Canyon Aeroad"
            break;
        case 2:
            return "Specialized Tarmac"
            break;
        case 3:
            return "BMC Timemachine"
            break;
        case 4:
            return "Colnago C64"
            break;
        case 5:
            return "Ridley Noah Fast"
            break;
        case 6:
            return "Trek Madone"
            break;
        case 7:
            return "De Rosa SK Pininfarina"
            break;
        case 8:
            return "Canyon Endurace"
            break;
        case 9:
            return "Soulrider Custom Steel"
            break;                
    }
}

console.log("Your next bike will be", getBike())