const transformText = (text) => {
    
	const result = text.split(' ').map(char => {

        if(char !== '') {
            return char.charAt(0).toUpperCase() + char.slice(1);
        } 

    }).join('');

    return result.length > 140 || result === '' ? false : '#' + result;
};

console.log(transformText(" Happy    fucking New   Year"));
