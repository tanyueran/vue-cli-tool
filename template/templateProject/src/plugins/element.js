/**
 * @author [%author%]
 * @date [%date%]
 * @desc element-ui的组件按需引入
 * */
import Vue from 'vue';
import {
  Button,
  Form,
  FormItem,
  Input,
  Message,
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Menu,
  MenuItem,
  Submenu,
  Header,
  Aside,
  Container,
  Main,
  Footer,
  Link,
  Breadcrumb,
  BreadcrumbItem,
  MenuItemGroup,
  Scrollbar,
  Pagination,
  Table,
  TableColumn,
  Row,
  Col,
  Loading,
  Dialog,
  Radio,
  RadioGroup,
  Tag,
  Checkbox,
  CheckboxGroup,
  MessageBox,
  Tree,
  Tabs,
  TabPane,
  Select,
  Option,
  OptionGroup,
  DatePicker,
  Popover,
  Divider,
  Card,
  Collapse,
  CollapseItem,
  Alert,
  Switch,
  Upload,
  Tooltip,
  Notification,
  Backtop,
} from 'element-ui';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Avatar);
Vue.use(Dropdown);
Vue.use(DropdownItem);
Vue.use(DropdownMenu);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Container);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Link);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Scrollbar);
Vue.use(MenuItemGroup);
Vue.use(Pagination);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(Tag);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(Tree);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(DatePicker);
Vue.use(Popover);
Vue.use(Divider);
Vue.use(Card);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Alert);
Vue.use(Switch);
Vue.use(Upload);
Vue.use(Tooltip);
Vue.use(Backtop);

// 设置全局默认
Vue.prototype.$ELEMENT = {
  size: 'small',
  zIndex: 1000,
};

Vue.prototype.$message = Message;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
