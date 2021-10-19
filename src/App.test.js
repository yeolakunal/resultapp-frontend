import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

it("Should render App", () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    const content = screen.getByText(/home/i);
    expect(content).toBeTruthy();

    const about = screen.getByText(/about/i);
    expect(about).toBeTruthy();
});
