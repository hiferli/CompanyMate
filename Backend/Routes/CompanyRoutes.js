import express from "express";
import { getCompanies, uploadCompany } from "../Controllers/CompaniesController.js";
const router = express.Router();

router.get('/companies' , getCompanies);
router.post('/companies' , uploadCompany);

export default router