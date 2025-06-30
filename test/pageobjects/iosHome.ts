class IosHome {
	public get textField() {
		return $('~Text Fields')
	}

	public get txt1() {
		return $('(//XCUIElementTypeTextField)[1]');
	}

	public get webviweBtn() {
		return $('-ios class chain:**/XCUIElementTypeStaticText[`name == "Web View"`]')
	}

	public get alertViews() {
		return $('-ios predicate string:name == "Alert Views"')
	}

	public get search() {
		return $('~Search')
	}

	public get defaultSearch() {
		return $('~Default')
	}

	public get searchBar() {
		return $('-ios predicate string:type == "XCUIElementTypeSearchField"')
	}

	public get clearText() {
		return $('~Clear text')
	}

	public get okCancelAlert() {
		return $('~Okay / Cancel')
	}
	public get pickerView(){
		return $('~Picker View')
	}
	public get redSet(){
		return $('~Red color component value')
	}
	public get greenSet(){
		return $('~Green color component value')
	}
	public get blueSet(){
		return $('~Blue color component value')
	}


}

export default new IosHome()