const BACKEND_PORT = 5000;
const API_ROUTE = `http://localhost:${BACKEND_PORT}/api`;

export const getAllCompanies = `${API_ROUTE}/companies`;
export const uploadCompanyRoute = `${API_ROUTE}/companies`;
export const incrementCompanyViewsRoute = `${API_ROUTE}/companies`;