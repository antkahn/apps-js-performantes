import React, { Fragment } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Highlight = () => {
  const codeString = `
    // Basic code splitting with React

    const MyComponent = () => {
      const [Bar, setBar] = useState(null);

      useEffect(() => {
        import('./components/Bar').then(BarComponent => {
          setBar(BarComponent.default);
        });
      }, [])

      if (!Bar) {
        return <div>Loading...</div>;
      } else {
        return <Bar/>;
      };
    }
    `;
  return (
    <Fragment>
      <h1>This page is displaying some highlighted code</h1>
      <SyntaxHighlighter language="javascript" style={docco}>
        {codeString}
      </SyntaxHighlighter>
    </Fragment>
  );
};

export default Highlight;
