
export const getStatusStyle = (status) => {
    switch (status) {
      case "answered":
        return { backgroundColor: "rgba(24, 245, 87, 0.8)" };
      case "active":
        return { backgroundColor: "rgba(24, 125, 245, 0.8)" };
      case "inactive":
        return { backgroundColor: "rgba(152, 150, 150, 0.8)" };
      default:
        return { backgroundColor: "rgba(190, 52, 202, 0.8)" };
    }
  };