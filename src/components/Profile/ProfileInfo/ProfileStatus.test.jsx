// https://www.valentinog.com/blog/testing-react/
import React from "react";
import {create} from 'react-test-renderer';
import ProfileStatus from "./ProfileStatus";

describe("Profile status component", () => {
    test("status from props should be in th state", () => {
        const component = create(<ProfileStatus status='works test'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("works test");
    });
    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus status={'works test'}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus status={'works test'}/>);
        const root = component.root;
        expect(() => {
            const input = root.findByType("input");

        }).toThrow();
    });
    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus status={'works test'}/>);
        const root = component.root;
        const span = root.findByType("span");
        expect(span.children[0]).toBe('works test');
    });
    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={'works test'}/>);
        const root = component.root;
        const span = root.findByType("span");
        span.props.onDoubleClick();
        const input = root.findByType("input");
        expect(input.props.value).toBe('works test');
    });
    test("callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={'works test'} updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});