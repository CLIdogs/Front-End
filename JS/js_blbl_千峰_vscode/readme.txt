笔记整理来源：
    bilibili视频    UP：千锋教育Web前端学院

HTML        表示结构
CSS         表示样式
JS          表示行为（交互）

JS三大核心：
    EMAScript，js的标准（语法）
    BOM，Browser Object Model，浏览器对象模型，用于操作浏览器的属性和方法
    DOM，Document Object Model，文档对象模型，用于操作文档流（页面内容）的属性和方法

可见，JS操作产生的效果就是：
    让浏览器或页面内容发生变化，从而形成交互。

JS的三种书写方法：
    行内(强烈不推荐)、内嵌(不推荐)、外链式。

    行内：
        a 标签：本身就带有行为（跳转）
            由于a可以进行跳转，所以需要判断当前行为是执行js还是进行跳转。
            调用js方法为
                href = "javascript: js代码;"
        非 a 标签：

    内嵌：
        js代码写在script标签内
    
    外链：
        <script src=""></script>    导入外部js文件


js代码是由浏览器自带的 js解析器 执行的，操作的内存空间是浏览器占用的用于js的内存空间。

js中变量的存储位置可分为 栈内存、堆内存
    基本数据类型存放在 栈 中，Number String Boolean Null Undefined
    复杂数据类型存放在 堆 中，Function Object，但是地址存放在 栈 中

js哲学：万物皆对象 —— Object


对于一个软件，如果内置了html css js的解析引擎，则也可以对相应的代码进行解析，
但是不能解析网页，因为需要一个顶级的window对象才能进行解析（浏览器中有window对象）