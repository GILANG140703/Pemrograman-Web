<?php

namespace app\Traits;

// Trait untuk memformat response API
trait ApiResponseFormatter
{
    public function apiResponse(int $code = 200, string $message = "success", array $data = null)
    {
        // Mengembalikan respons dalam format JSON
        return json_encode([
            "code" => $code,
            "message" => $message,
            "data" => $data
        ]);
    }
}
