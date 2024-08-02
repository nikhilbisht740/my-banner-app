import React, { useState, useCallback, useEffect } from "react";
import { TextField, Button, Box, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { Upload, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import html2canvas from "html2canvas";

interface BannerData {
  title: string;
  description: string;
  buttonText: string;
  imageUrl: string;
}

interface BannerEditorProps {
  initialImageUrl: string;
  initialTitle: string;
}

const DropZone = styled("div")(({ theme }) => ({
  border: `2px dashed ${theme.palette.primary?.main}`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  textAlign: "center",
  cursor: "pointer",
  marginBottom: theme.spacing(2),
}));

const BannerPreview = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "400px",
  backgroundSize: "cover",
  backgroundPosition: "center",

  marginBottom: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  alignItems: "center",
  gap: "25px",

  color: "white",
  textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
}));

const BannerEditor: React.FC<BannerEditorProps> = ({
  initialImageUrl,
  initialTitle,
}) => {
  const [bannerData, setBannerData] = useState<BannerData>({
    title: initialTitle,
    description: "Grilled to Perfection",
    buttonText: "Explore",
    imageUrl: initialImageUrl,
  });

  useEffect(() => {
    setBannerData((prev) => ({
      ...prev,
      imageUrl: initialImageUrl,
      title: initialTitle,
    }));
  }, [initialImageUrl, initialTitle]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target) {
        setBannerData((prev) => ({
          ...prev,
          imageUrl: event.target!.result as string,
        }));
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBannerData({ ...bannerData, [e.target.name]: e.target.value });
  };

  const handleDownload = async () => {
    const bannerElement = document.getElementById("banner-preview");
    if (bannerElement) {
      const canvas = await html2canvas(bannerElement);
      const dataURL = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "edited-banner.png";
      link.href = dataURL;
      link.click();
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 500,
        margin: "auto",
        padding: 2,
        bgcolor: "background.paper",
        borderRadius: 2,
        boxShadow: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        {/* <Typography variant="h6">Banner Edit</Typography> */}
        <IconButton size="small">
          <X size={18} />
        </IconButton>
      </Box>

      <DropZone {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here ...</p>
        ) : (
          <p>Drag 'n' drop an image here, or click to select files</p>
        )}
        <Upload size={24} />
      </DropZone>

      <BannerPreview
        id="banner-preview"
        style={{ backgroundImage: `url(${bannerData.imageUrl})` }}
      >
        <Typography variant="h4">{bannerData.title}</Typography>
        <Typography variant="subtitle1">{bannerData.description}</Typography>
        <Button variant="contained" sx={{ mt: 2 }}>
          {bannerData.buttonText}
        </Button>
      </BannerPreview>

      <TextField
        fullWidth
        label="Title"
        name="title"
        value={bannerData.title}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Description"
        name="description"
        value={bannerData.description}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Button Text"
        name="buttonText"
        value={bannerData.buttonText}
        onChange={handleInputChange}
        margin="normal"
        variant="outlined"
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleDownload}
        sx={{
          mt: 2,
          bgcolor: "primary.dark",
          "&:hover": { bgcolor: "primary.main" },
        }}
      >
        Download
      </Button>
    </Box>
  );
};

export default BannerEditor;
