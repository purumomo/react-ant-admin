import { createFromIconfontCN } from "@ant-design/icons";

const MyIcon = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2467607_dmlotx6vhmq.js", // 在 iconfont.cn 上生成
});

export default function Icon({ type, ...itemProps }) {
  if (!type) return null;
  return <MyIcon type={type} {...itemProps} />;
}
