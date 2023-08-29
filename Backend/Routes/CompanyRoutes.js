import express from "express";
import { deleteCompany, getCompanies, incrementViews, updateCompany, uploadCompany } from "../Controllers/CompaniesController.js";
import { checkAlreadyExists, checkIfNotExisting, convertCase } from "../Controllers/Middlewares/CompanyMiddlewares.js";

const router = express.Router();

router.get('/companies' , getCompanies);
router.post('/companies' , convertCase , checkAlreadyExists , uploadCompany);
router.delete('/companies/:id' , checkIfNotExisting , deleteCompany)
router.patch('/companies/:id' , checkIfNotExisting , updateCompany)
router.put('/companies/:id' , checkIfNotExisting , incrementViews);

export default router