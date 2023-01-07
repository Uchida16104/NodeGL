function glslAxis(perspective) {
	if (perspective === "x") {
		return "st.x";
	} else if (perspective === "2x") {
		return "st.x+st.x";
	} else if (perspective === "pow(x,2)") {
		return "st.x*st.x";
	} else if (perspective === "x+y") {
		return "st.x+st.y";
	} else if (perspective === "x-y") {
		return "st.x-st.y";
	} else if (perspective === "x*y") {
		return "st.x*st.y";
	} else if (perspective === "x/y") {
		return "st.x/st.y";
	} else if (perspective === "y-x") {
		return "st.y-st.x";
	} else if (perspective === "y/x") {
		return "st.y/st.x";
	} else if (perspective === "2y") {
		return "st.y+st.y";
	} else if (perspective === "pow(y,2)") {
		return "st.y*st.y";
	} else {
	    return perspective;
	}
};
