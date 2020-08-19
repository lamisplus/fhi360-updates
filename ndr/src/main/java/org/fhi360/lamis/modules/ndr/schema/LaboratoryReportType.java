
package org.fhi360.lamis.modules.ndr.schema;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlSchemaType;
import javax.xml.bind.annotation.XmlType;
import javax.xml.datatype.XMLGregorianCalendar;


/**
 * <p>Java class for LaboratoryReportType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="LaboratoryReportType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="VisitID" type="{}StringType"/>
 *         &lt;element name="VisitDate" type="{http://www.w3.org/2001/XMLSchema}date"/>
 *         &lt;element name="LaboratoryTestIdentifier" type="{}StringType" minOccurs="0"/>
 *         &lt;element name="CollectionDate" type="{http://www.w3.org/2001/XMLSchema}date" minOccurs="0"/>
 *         &lt;element name="BaselineRepeatCode" minOccurs="0">
 *           &lt;simpleType>
 *             &lt;restriction base="{}CodeType">
 *               &lt;enumeration value="B"/>
 *               &lt;enumeration value="R"/>
 *             &lt;/restriction>
 *           &lt;/simpleType>
 *         &lt;/element>
 *         &lt;element name="ARTStatusCode" type="{}CodeType" minOccurs="0"/>
 *         &lt;element name="LaboratoryOrderAndResult" type="{}LaboratoryOrderAndResult" maxOccurs="unbounded"/>
 *         &lt;element name="Clinician" type="{}StringType" minOccurs="0"/>
 *         &lt;element name="ReportedBy" type="{}StringType" minOccurs="0"/>
 *         &lt;element name="CheckedBy" type="{}StringType" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "LaboratoryReportType", propOrder = {
    "visitID",
    "visitDate",
    "laboratoryTestIdentifier",
    "collectionDate",
    "baselineRepeatCode",
    "artStatusCode",
    "laboratoryOrderAndResult",
    "clinician",
    "reportedBy",
    "checkedBy"
})
public class LaboratoryReportType {

    @XmlElement(name = "VisitID", required = true)
    protected String visitID;
    @XmlElement(name = "VisitDate", required = true)
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar visitDate;
    @XmlElement(name = "LaboratoryTestIdentifier")
    protected String laboratoryTestIdentifier;
    @XmlElement(name = "CollectionDate")
    @XmlSchemaType(name = "date")
    protected XMLGregorianCalendar collectionDate;
    @XmlElement(name = "BaselineRepeatCode")
    protected String baselineRepeatCode;
    @XmlElement(name = "ARTStatusCode")
    protected String artStatusCode;
    @XmlElement(name = "LaboratoryOrderAndResult", required = true)
    protected List<LaboratoryOrderAndResult> laboratoryOrderAndResult;
    @XmlElement(name = "Clinician")
    protected String clinician;
    @XmlElement(name = "ReportedBy")
    protected String reportedBy;
    @XmlElement(name = "CheckedBy")
    protected String checkedBy;

    /**
     * Gets the value of the visitID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVisitID() {
        return visitID;
    }

    /**
     * Sets the value of the visitID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVisitID(String value) {
        this.visitID = value;
    }

    /**
     * Gets the value of the visitDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getVisitDate() {
        return visitDate;
    }

    /**
     * Sets the value of the visitDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setVisitDate(XMLGregorianCalendar value) {
        this.visitDate = value;
    }

    /**
     * Gets the value of the laboratoryTestIdentifier property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getLaboratoryTestIdentifier() {
        return laboratoryTestIdentifier;
    }

    /**
     * Sets the value of the laboratoryTestIdentifier property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setLaboratoryTestIdentifier(String value) {
        this.laboratoryTestIdentifier = value;
    }

    /**
     * Gets the value of the collectionDate property.
     * 
     * @return
     *     possible object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public XMLGregorianCalendar getCollectionDate() {
        return collectionDate;
    }

    /**
     * Sets the value of the collectionDate property.
     * 
     * @param value
     *     allowed object is
     *     {@link XMLGregorianCalendar }
     *     
     */
    public void setCollectionDate(XMLGregorianCalendar value) {
        this.collectionDate = value;
    }

    /**
     * Gets the value of the baselineRepeatCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBaselineRepeatCode() {
        return baselineRepeatCode;
    }

    /**
     * Sets the value of the baselineRepeatCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBaselineRepeatCode(String value) {
        this.baselineRepeatCode = value;
    }

    /**
     * Gets the value of the artStatusCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getARTStatusCode() {
        return artStatusCode;
    }

    /**
     * Sets the value of the artStatusCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setARTStatusCode(String value) {
        this.artStatusCode = value;
    }

    /**
     * Gets the value of the laboratoryOrderAndResult property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the laboratoryOrderAndResult property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getLaboratoryOrderAndResult().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link LaboratoryOrderAndResult }
     * 
     * 
     */
    public List<LaboratoryOrderAndResult> getLaboratoryOrderAndResult() {
        if (laboratoryOrderAndResult == null) {
            laboratoryOrderAndResult = new ArrayList<LaboratoryOrderAndResult>();
        }
        return this.laboratoryOrderAndResult;
    }

    /**
     * Gets the value of the clinician property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getClinician() {
        return clinician;
    }

    /**
     * Sets the value of the clinician property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setClinician(String value) {
        this.clinician = value;
    }

    /**
     * Gets the value of the reportedBy property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReportedBy() {
        return reportedBy;
    }

    /**
     * Sets the value of the reportedBy property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReportedBy(String value) {
        this.reportedBy = value;
    }

    /**
     * Gets the value of the checkedBy property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCheckedBy() {
        return checkedBy;
    }

    /**
     * Sets the value of the checkedBy property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCheckedBy(String value) {
        this.checkedBy = value;
    }

}
