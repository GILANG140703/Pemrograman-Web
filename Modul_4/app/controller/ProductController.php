<?php 

namespace app\Controller;

include "app/Traits/ApiResponseFormatter.php";
include "app/Models/Product.php";

use app\Models\Product;
use app\Traits\ApiResponseFormatter;

class ProductController {

    use ApiResponseFormatter;

    public function index() {
        $productModel =  new Product();
        $response = $productModel->findAll();
        return $this->apiResponse(200, "Success", $response);
    }

    public function getById($id) {
        $productModel =  new Product();
        $response = $productModel->findById($id);
        return $this->apiResponse(200, "Success", $response);
    }

    public function insert() {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
    
        if (json_last_error()) {
            return $this->apiResponse(400, "Error invalid input", null);
        }
    
        $productModel =  new Product();
        $response = $productModel->create([
            'product_name' => $inputData['product_name']
        ]);
    
        // Pastikan mengirimkan array kosong atau data yang valid
        return $this->apiResponse(200, "Success", $response ? $response : null);
    }
    

    public function update($id) {
        $jsonInput = file_get_contents('php://input');
        $inputData = json_decode($jsonInput, true);
    
        // Cek apakah JSON valid
        if (json_last_error() !== JSON_ERROR_NONE) {
            return $this->apiResponse(400, "Error: Invalid JSON input", null);
        }
    
        // Cek apakah product_name ada dalam input
        if (!isset($inputData['product_name'])) {
            return $this->apiResponse(400, "Error: Missing product_name in input", null);
        }
    
        // Buat objek Product dan panggil metode update
        $productModel = new Product();
        $response = $productModel->update($id, [
            'product_name' => $inputData['product_name']
        ]);
    
        return $this->apiResponse(200, "Product Update Success", $response);
    }
    

    public function delete($id) {
        $productModel =  new Product();
        $response = $productModel->delete($id);
        return $this->apiResponse(200, "Success", $response);
    }
}