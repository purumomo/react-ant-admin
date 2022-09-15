import { Layout } from "antd";
const { Footer } = Layout;

export default function BottomFooter() {
  return (
    <Footer className="footer">
      <p>
        <a
          href="https://azhengpersonalblog.top/doc-react-ant-admin"
          target="_blank"
          rel="noreferrer"
        >
          react-ant-admin文档地址
        </a>
      </p>

      <p>系统文件测试  ©2022 Created by CAO FENGNING
      </p>
    </Footer>
  );
}
