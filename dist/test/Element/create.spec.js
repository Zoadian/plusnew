"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("index");
describe('checking if createElement works as expected', () => {
    let plusnew;
    beforeEach(() => {
        plusnew = new index_1.default();
    });
    it('Is div element created', () => {
        const instance = plusnew.createElement('div', null);
        expect(instance.type).toBe('div');
    });
    it('Is div props correct created', () => {
        const props = {
            className: 'foo',
        };
        const instance = plusnew.createElement('div', props);
        expect(instance.props).toEqual(Object.assign({}, props, { children: [] }));
        // The props should be equal, but not be the same - reference breaking
        expect(instance.props).not.toBe(props);
    });
    it('Is div props correct created when null', () => {
        const instance = plusnew.createElement('div', null);
        expect(instance.props).toEqual({ children: [] });
    });
    it('Is div props correct created when adding children', () => {
        const child = plusnew.createElement('span', null);
        const instance = plusnew.createElement('div', null, child);
        expect(instance.props.children.length).toBe(1);
        expect(instance.props.children[0]).toBe(child);
    });
    it('Is div props correct created when adding children without reference', () => {
        const child = plusnew.createElement('span', null);
        const props = {
            className: 'foo',
        };
        const instance = plusnew.createElement('div', props, child);
        expect(instance.props.children.length).toBe(1);
        expect(instance.props.children[0]).toBe(child);
        expect(props).not.toContain('children');
    });
    it('Is div props correct created when creating multiple children', () => {
        const firstChild = plusnew.createElement('span', null);
        const secondChild = plusnew.createElement('ul', null);
        const instance = plusnew.createElement('div', null, firstChild, secondChild);
        expect(instance.props.children[0]).toBe(firstChild);
        expect(instance.props.children[1]).toBe(secondChild);
    });
    it('check if component gets safed', () => {
        const component = () => {
            return {
                render: () => plusnew.createElement('div', null),
                dependencies: {},
            };
        };
        const props = { foo: 'bar' };
        const instance = plusnew.createElement(component, props);
        expect(instance.type).toBe(component);
        expect(instance.props).toEqual(Object.assign({}, props, { children: [] }));
        expect(instance.props).not.toBe(props);
    });
});
//# sourceMappingURL=create.spec.js.map