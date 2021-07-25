import React from "react";
import "./style.css";

function Members() {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Industry</th>
          <th>Location</th>
          <th>Master's University</th>
          <th>Major</th>
          <th>Grad Year</th>
          <th>Other Ed.</th>
          <th>Title</th>
          <th>Company</th>
          <th>Experiences</th>
          <th>Linkedin Profile URL</th>
        </tr>
          <tr>
          <td>Jainam Shah</td>
          <td>+91 8469975929</td>
          <td>Technology</td>
          <td>Windsor,Canada</td>
          <td>University of Windsor</td>
          <td>Manufacturing</td>
          <td>2021</td>
          <td></td>
          <td>Supply Chain Executive</td>
          <td>Blue Origin</td>
          <td>
            Nice experience while working with the company as it has not only
            helped me to grow personally but also I have contributed
            caategorically to the organization.
          </td>
        </tr>

        <tr>
        <td>Dhruvil Patel</td>
        <td>+91 8469475923</td>
        <td>Technology</td>
        <td>New Jersey,USA</td>
        <td>Rutgers University</td>
        <td>Manufacturing</td>
        <td>2021</td>
        <td></td>
        <td>Data Analyst</td>
        <td>Tesla</td>
        <td>
          Nice experience while working with the company as it has not only
          helped me to grow personally but also I have contributed
          caategorically to the organization.
        </td>
      </tr>

      <tr>
      <td>Nisarg Patel</td>
      <td>+91 2589634896</td>
      <td>Business</td>
      <td>Rayleigh,USA</td>
      <td>North Carolina State University</td>
      <td>Operations</td>
      <td>2021</td>
      <td></td>
      <td>Operations Manager</td>
      <td>Apple Inc</td>
      <td>
        Nice experience while working with the company as it has not only
        helped me to grow personally but also I have contributed
        caategorically to the organization.
      </td>
    </tr>

      </table>
    </div>
  );
}

export default Members;
