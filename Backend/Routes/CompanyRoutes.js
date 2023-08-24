import express from "express";
import { deleteCompany, getCompanies, uploadCompany } from "../Controllers/CompaniesController.js";
const router = express.Router();

router.get('/companies' , getCompanies);
router.post('/companies' , uploadCompany);
router.delete('/companies/:id' , deleteCompany)

export default router