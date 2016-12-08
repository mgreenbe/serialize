const serialize = function(form) {
    const formData = new FormData(form);
    const serial = {};
    for (const [key, value] of formData.entries()) {
        if (key in serial) {
            const x = serial[key];
            const y = Array.isArray(x) ? x : [x];
            serial[key] = [...y, value];
        } else {
            serial[key] = value;
        }
    }
    return serial;
}

