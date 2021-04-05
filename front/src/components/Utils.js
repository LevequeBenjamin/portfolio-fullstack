// ******************** components/Utils.js ******************** //

/* ******************** isEmpty ******************** */
export const isEmpty = value => {
	return (
		value === undefined ||
		value === null ||
		(typeof value === 'object' && Object.keys(value).length === 0) ||
		(typeof value === 'string' && value.trim().length === 0)
	);
};
/* ******************** isEmpty end ******************** */

/* ******************** dateParser ******************** */
export const dateParser = num => {
	let options = {
		hour: '2-digit',
		minute: '2-digit',
		seconde: '2-digit',
		weekday: 'short',
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	};

	let timestamp = Date.parse(num);

	let date = new Date(timestamp).toLocaleDateString('fr-FR', options);

	return date.toString();
};
/* ******************** dateParser end ******************** */
