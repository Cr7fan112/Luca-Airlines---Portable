xui.Class('App', 'xui.Module',{
    Instance:{
        Dependencies:[],
        Required:[],

        properties : {},

        initialize : function(){
        },

        iniComponents : function(){
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            // Adding a heading for "Luca Airlines Portable"
            append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label")
                .setLeft("1em")
                .setTop("1em")
                .setWidth("25em")
                .setHeight("2.5em")
                .setCaption("Luca Airlines Portable")
                .setHAlign("center")
                .setVAlign("middle")
                .setFontSize("2em")
                .setFontWeight("bold")
                .setColor("#FFFFFF")
                .setBackground("#007BFF")
                .setBorderRadius("10px")
                .setPadding("0.5em")
            );

            // Adding the image below the heading
            append(
                xui.create("xui.UI.Image")
                .setHost(host,"xui_ui_image5")
                .setLeft("7em")
                .setTop("5em")
                .setWidth("20em")
                .setHeight("15em")
                .setSrc("{xui.ini.img_pic}")
                .setShadow(true)
                .setBorderRadius("10px")
            );
            
            return children;
        },

        customAppend : function(parent, subId, left, top){
            return false;
        }
    }
});
