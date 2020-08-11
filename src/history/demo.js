import {createBrowserHistory} from 'history';

const history = createBrowserHistory();

const location = history.location;  //获取当前location

const unlisten = history.listen((location, action)=>{
    let {pathname, state} = location;  //location是一个类似window.location的对象
    console.log(action, pathname, state);
});

history.push('/home', {some: 'state'});  //使用push、replace、go来导航

unlisten();  //停止监听，调listen()返回的函数。
