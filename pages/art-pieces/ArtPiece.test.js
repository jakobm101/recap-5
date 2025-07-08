import ArtPiece from "./[slug]";
import { render, screen } from "@testing-library/react";
import mockRouter from "next-router-mock";
import mockData from "@/data/mockData";

jest.mock("next/router", () => jest.requireActual("next-router-mock"));

describe("slug", () => {
    it('Art piece fails loading', ()=>{
        mockRouter.push('/')
        render(<ArtPiece/>)
        const text = screen.getByText(/nothing/i)
        expect(text).toBeInTheDocument()
    })
});

