const serializeTransaction = (obj) => {
    const serialized = { ...obj };
    if (obj.balance) {
      serialized.balance = obj.balance.toNumber();
    }
    if (obj.amount) {
        serialized.amount = obj.balance.toNumber();
    }

    return serialized;
  };
