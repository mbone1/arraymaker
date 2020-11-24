// function to generate markdown for README
function generateMarkdown({
    let,
    array
}) {
    console.log(array)
    return `let ${let} = [${array.split("")}]`; 

};

module.exports = generateMarkdown;