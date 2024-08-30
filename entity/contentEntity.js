export default class ContentEntity {
    constructor(item){
        this.ordering =  item.properties["ordering"].number
        this.title = item.properties["名前"].title[0].text.content
        this.image1 = item.properties["image1"].files[0].url
        this.image2 = item.properties["image2"].files[0].url
        this.image3 = item.properties["image3"].files[0].url

        this.image1Link = item.properties["image1Link"].rich_text[0].text.content
        this.mainLink = this.image1Link
        if(item.properties["image2Link"].rich_text[0]){
            this.image2Link = item.properties["image2Link"].rich_text[0].text.content
            this.mainLink = undefined
        }
        if(item.properties["image3Link"].rich_text[0]){
            this.image2Link = item.properties["image3Link"].rich_text[0].text.content
            this.mainLink = undefined
        }

        console.log(this)
    }
}
