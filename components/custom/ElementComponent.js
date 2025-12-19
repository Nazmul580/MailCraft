import React from "react";

const ElementComponent = ({ element }) => {
  const { tag, style, defaultContent, type } = element;

  // Image tag er jonno 'src' dorkar, onno gular jonno 'children'
  const props = {
    style: style,
    key: element.id,
  };

  if (type === "image") {
    props.src = defaultContent;
    props.alt = "dynamic-img";
    return React.createElement(tag, props);
  }

  if (type === "social") {
    return React.createElement(
      tag,
      props,
      defaultContent.map((link) =>
        React.createElement("span", { key: link }, link)
      )
    );
  }

  // Normal text ba button er jonno
  return React.createElement(tag, props, defaultContent);
};

export default ElementComponent;
