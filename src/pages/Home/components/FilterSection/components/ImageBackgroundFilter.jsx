import React from "react";

const ImageBackgroundFilter = () => {
    return (
        <img
            src="https://images.unsplash.com/photo-1710092784814-4a6f158913b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXJzJTIwaGVscGluZyUyMGNvbW11bml0eSUyMGRvbmF0aW9ufGVufDF8fHx8MTc1NTkwNTUwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Voluntários trabalhando juntos"
            className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
            draggable="false"
        />
    );
};

export default ImageBackgroundFilter;
