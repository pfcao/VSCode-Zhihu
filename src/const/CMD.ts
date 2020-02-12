export enum FeedCmds {
	refresh = 'zhihu.refreshFeed',
	previousPage = 'zhihu.previousPage',
	nextPage = 'zhihu.nextPage'
}

export enum HotstoriesCmds {
	refresh = 'zhihu.refreshHotstories'
}

export enum CollectionCmds {
	refresh = 'zhihu.refreshCollection',
	add = 'zhihu.collect',
	delete = 'zhihu.deleteItem'
}

export enum WebviewCmds {
	open = 'zhihu.openWebview'
}

export enum SearchCmds {
	search = 'zhihu.search',
	preview = 'zhihu.preview'
}

export enum AuthorCmds {
	publish = 'zhihu.publish',
	uploadImageFromClipboard = 'zhihu.uploadImageFromClipboard',
	uploadImageFromPath = 'zhihu.uploadImageFromPath',
	uploadImageFromExplorer = 'zhihu.uploadImageFromExplorer'
}

export enum AuthCmds {
	login = 'zhihu.login',
	logout = 'zhihu.logout'
}

export enum UtilCmds {
	/**
	 * get link of a tree node inherits linkable tree item
	 */
	getLink = 'zhihu.getLink'

}