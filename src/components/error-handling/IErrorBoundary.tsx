export interface IErrorBoundary {
    errorMessage: string,
    children: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal
}