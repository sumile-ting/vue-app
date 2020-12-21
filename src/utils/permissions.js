

export default{

    // 返回用户权限内拥有的菜单列表
    // 例如：总菜单 [a,b,c,d,e] 当前登录用户拥有[a,c]两个菜单权限。则返回 [a,c]
    // 本质上就是一个if判断--_--


    // 首部导航菜单
    getHaveModules(moduless, resources){
        if( !resources || resources.length < 1){
            return [this.GLOBAL.TOP_MENUES[0]];
        }
        let modulese = [];
        for(let obj of moduless){
            if(resources.includes("/"+obj.iname) || obj.iname == 'myPortal'){
                modulese.push(obj);
            }
        }
        return modulese;
    },


    /**
     * 递归遍历。如果该用户没有这个结点的权限，直接去掉这个结点
     * @param asidess   传入的某一个模块的结点
     * @param resources 用户总资源
     */
    removeNotHaveDot(asidess, resources, mainMenuName){
        for (let i = 0; i < asidess.length; i++) {
            if (resources.includes(asidess[i].url)) {
                if(asidess[i].children && asidess[i].children.length > 0){
                    this.removeNotHaveDot(asidess[i].children, resources, mainMenuName);
                }
            }else if(mainMenuName != 'myPortal'){
                // 去掉这个结点
                asidess.splice(i, 1);
                i--;
            }
        }
    },


}
