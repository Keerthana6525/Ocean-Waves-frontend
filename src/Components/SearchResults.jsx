
// src/Components/SearchResults.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Fuse from "fuse.js";
import searchData from "../Data/SearchData";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const term = query.get("q")?.toLowerCase() || "";
  const navigate = useNavigate();

  // Fuse.js options
  const fuse = new Fuse(searchData, {
    keys: ["name", "keywords"], // search by name + keywords
    threshold: 0.3, // lower = stricter, higher = more fuzzy
    ignoreLocation: true
  });

  // Run fuzzy search if user typed something
  const results = term ? fuse.search(term).map(r => r.item) : [];

  console.log("Search term:", term);
  console.log("Results:", results);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Results for "{term}"
      </Typography>

      {results.length > 0 ? (
        results.map((result, i) => (
          <Box key={i} sx={{ mb: 4, textAlign: "center" }}>
            <Typography variant="h6">{result.name}</Typography>
            <Box
              component="img"
              src={result.image}
              alt={result.name}
              sx={{ width: "300px", height: "auto", borderRadius: 2, boxShadow: 3, mb: 2 }}
            />
            <br />
            <Button variant="contained" onClick={() => navigate(result.link)}>
              View {result.name}
            </Button>
          </Box>
        ))
      ) : (
        <Typography>No results found.</Typography>
      )}
    </Box>
  );
}
