export const stripTitle = (title) => {
    return title.slice(0, title.lastIndexOf('-')-1);
}

export const removePunctuation = (txt) => {
    return txt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
}