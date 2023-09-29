import { expect, test } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import { Provider } from "react-redux";
import store from "../store/store";

test("Create Product Form", () => {
  render(
    <Provider store={store}>
      <MemoryRouter initialEntries={["/"]}>
        <CreateProduct />
      </MemoryRouter>
    </Provider>,
  );

  const productName = screen.getByTitle("productName");
  expect(productName).toBeDefined();
  fireEvent.change(productName, { target: { value: "Alterra Academy" } });

  const productCategory = screen.getByTitle("productCategory");
  expect(productCategory).toBeDefined();
  fireEvent.change(productCategory, { target: { value: "two" } });

  const optionB = screen.getByTitle("optionB");
  expect(optionB).toBeDefined();
  fireEvent.click(optionB);

  const radio0 = screen.getByTitle("radio0");
  expect(radio0).toBeDefined();
  fireEvent.click(radio0);

  const imageOfProduct = screen.getByTitle("imageOfProduct");
  expect(imageOfProduct).toBeDefined();
  fireEvent.change(imageOfProduct, {
    target: {
      files: [
        new File(["../../images/Tailwind.svg"], "Tailwind.svg", {
          type: "image/svg",
        }),
      ],
    },
  });

  const additionalDesc = screen.getByTitle("additionalDesc");
  expect(additionalDesc).toBeDefined();
  fireEvent.change(additionalDesc, { target: { value: "Alterra Academy" } });

  const randomNumber = screen.getByTitle("randomNumber");
  expect(randomNumber).toBeDefined();
  fireEvent.click(randomNumber);

  const submit = screen.getByTitle("submit");
  expect(submit).toBeDefined();
  fireEvent.click(submit);
});
