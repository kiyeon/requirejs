function utils() {
    function nvl(val, nullString)
    {
        var nullVal = (arguments.length === 2 && typeof nullString === "string" && nullString !== "") ? nullString : "";

        return (
            val === null ||
            typeof val === "undefined" ||
            (typeof val === "string" && val === "") ||
            (val && typeof val === "object" && val.constructor === Array && val.length === 0) ||
            (val && typeof val === "object" && val.constructor === Object && Object.keys(val).length === 0)
        ) ? nullVal : val;
    }

    return {
        nvl:nvl
    }
}

module.exports = utils();