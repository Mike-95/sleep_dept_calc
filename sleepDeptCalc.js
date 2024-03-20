const getSleepHours = (day) => {
    switch (day.toLowerCase()) {
      case "monday":
        return 8;
      case "thuesday":
        return 7;
      case "wednesday":
        return 10;
      case "thursday":
        return 5;
      case "friday":
        return 6;
      case "saturday":
        return 7;
      case "sunday":
        return 8;
      default:
        return "Invalid input";
    }
  };
  
  const getActualSleepHours = () => {
    sum =
      getSleepHours("monday") +
      getSleepHours("thuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
    return sum;
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 5;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log("user got the perfect amount of sleep");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("user got more sleep than needed");
    } else if (actualSleepHours < idealSleepHours) {
      console.log("user should get some rest");
    }
  };
  
  console.log(calculateSleepDebt())
  
  // console.log(getActualSleepHours())
  // console.log(getIdealSleepHours())
  