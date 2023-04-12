export class ListItemModel {
	constructor(dto) {
		return { ...dto };
	}

	key;
	props;
	type;
}
