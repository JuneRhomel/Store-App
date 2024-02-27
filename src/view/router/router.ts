import express, { Router } from 'express';
import loginRouter from '../auth/login.js';
import logoutRouter from '../auth/logout.js'
import { createProduct, getProduct, listProduct, updateProduct, deleteProduct } from '../product/product.js'
import registerRouter from '../register/register.js'
const router = express.Router();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


router.use("/register", registerRouter);
router.use('/auth/login', loginRouter);
router.use('/auth/logout', logoutRouter);

router.use('/product', createProduct);
router.use('/product', updateProduct);
router.use('/product', listProduct);
router.use('/product', getProduct);
router.use('/product', deleteProduct);

export default router;