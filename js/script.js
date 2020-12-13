
function MorseTranslator()
{
	var msgInput = document.getElementById("msgInput");
	var msgOutput = document.getElementById("msgOutput");

	if (isMorseCode(msgInput.value) == true)
	{
		var decoded = morse.decode(msgInput.value);
		msgOutput.value = decoded;
	}
	else
	{
		var encoded = morse.encode(msgInput.value);
		msgOutput.value = encoded;
	}
}

function isMorseCode(str)
{
	for (var i=0; i < str.length; i++)
		if (['/','1','2','3','4','5','6','7','8','9','10'].indexOf(str.charAt(i)) == -1)
			return false;
	return true;
}